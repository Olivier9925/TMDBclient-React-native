import { EnvConstants, WSConstants } from '@constants';
import RNFetchBlob from 'rn-fetch-blob';
import DateUtils from '@utils/DateUtils';

let token = '';
let deviceInfoHeaders = '';
const standardTimeout = 30 * 1000;
const postImagesTimeout = 60 * 1000;

function defaultHeaders() {
    return {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-type': 'application/json',
        'Cache-Control': 'no-cache, no-store'
    };
}

function buildBody(body) {
    const formBody = [];
    Object.keys(body).forEach(key => {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(body[key]);
        formBody.push(`${encodedKey}=${encodedValue}`);
    });
    return formBody.join('&');
}

function handleJsonResponse(response, res, rej) {
    response.json()
        .then(data => {
            if (response.status === 200) {
                res(data);
            } else {
                const error = {
                    status: data.status,
                    type: data.type,
                    message: data.detail
                };
                rej(error);
            }
        })
        .catch(e => {
            const error = {
                status: response.status,
                message: `Response is not JSON : ${e.message}`
            };
            rej(error);
        });
}

function timeoutPromise(ms, promise) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error('promise timeout'));
        }, ms);
        promise.then(
            (res) => {
                clearTimeout(timeoutId);
                resolve(res);
            },
            (err) => {
                clearTimeout(timeoutId);
                reject(err);
            }
        );
    });
}

function fetchWithTimeout(url, options) {
    return timeoutPromise(standardTimeout, fetch(url, options));
}

export default {

    setTokens: (accessToken) => {
        token = accessToken;
    },

    setDeviceInfoHeaders: (deviceInfo, locale) => {
        deviceInfoHeaders = {
            'Accept-Language': locale,
            ClientDeviceId: deviceInfo?.id,
            ClientType: 'MyAssura',
            ClientVersion: deviceInfo?.applicationVersion,
            OsName: deviceInfo?.osName,
            OsVersion: deviceInfo?.softwareVersion,
            Device: deviceInfo?.deviceType === 'Handset' ? 'smartphone' : deviceInfo?.deviceType?.toLowerCase(),
            Brand: deviceInfo?.brand,
            Model: deviceInfo?.type
        };
    },

    // POST IMAGES
    postImages: (pageId, fileUri, secretKeyHash) => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders,
            'Content-type': 'multipart/form-data',
            'X-Key-Digest': secretKeyHash
        };
        const fileToUpload = {
            name: 'file',
            filename: `${pageId}.jpg`,
            type: 'image/jpeg',
            data: RNFetchBlob.wrap(fileUri)
        };

        RNFetchBlob.config({ timeout: postImagesTimeout }).fetch('POST', `${EnvConstants.IMAGE_BASE_URL}${WSConstants.ROUTES.API}v2/${WSConstants.ROUTES.IMAGES}`, headers, [fileToUpload])
            .then((response) => {
                const httpResponseCode = response?.respInfo?.status;
                if (httpResponseCode === 200) {
                    res(JSON.parse(response?.data));
                } else {
                    const e = {
                        status: httpResponseCode,
                        message: response,
                    };
                    rej(e);
                }
            })
            .catch((e) => {
                console.log(`Error postImages: ${JSON.stringify(e)}`);
                rej(e);
            });
    }),

    // POST DOCUMENT
    postDocument: (document) => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders
        };

        fetchWithTimeout(`${EnvConstants.IMAGE_BASE_URL}${WSConstants.ROUTES.API}v2/${WSConstants.ROUTES.ENVELOPPES}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(document)
        })
            .then((response) => {
                handleJsonResponse(response, res, rej);
            })
            .catch((e) => {
                rej(e);
            });
    }),

    // PUT DOCUMENT HANDLE ERROR
    putDocumentHandleError: (remoteId) => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders,
        };

        fetchWithTimeout(`${EnvConstants.SECRET_KEY_BASE_URL}${WSConstants.ROUTES.API}v2/${WSConstants.ROUTES.ENVELOPPES}/${remoteId}/${WSConstants.ROUTES.HANDLE_ERROR}`, {
            method: 'PUT',
            headers,
        })
            .then((response) => {
                handleJsonResponse(response, res, rej);
            })
            .catch((e) => {
                rej(e);
            });
    }),

    // AUTHENTICATION
    authentication: (username, password) => new Promise((res, rej) => {
        const headers = {
            ...deviceInfoHeaders,
            'Content-type': 'application/json',
            'Cache-Control': 'no-cache, no-store'
        };

        const body = {
            username,
            password
        };

        fetchWithTimeout(`${EnvConstants.AUTHENTICATION_BASE_URL}${WSConstants.ROUTES.API}v3/${WSConstants.ROUTES.AUTHENTICATION}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }).then((response) => {
            handleJsonResponse(response, res, rej);
        }).catch((e) => {
            rej(e);
        });
    }),

    // GET JWT 1
    getJwt1: (transactionId, otp, pushNotificationDeviceId) => new Promise((res, rej) => {
        const headers = {
            ...deviceInfoHeaders,
            'Content-type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache, no-store',
            PushId: pushNotificationDeviceId
        };

        const body = {
            grant_type: 'password',
            client_id: EnvConstants.CLIENT_ID_JWT1,
            username: transactionId,
            password: otp
        };

        fetchWithTimeout(`${EnvConstants.AUTHENTICATION_BASE_URL}${WSConstants.ROUTES.GET_JWT_1}`, {
            method: 'POST',
            headers,
            body: buildBody(body)
        }).then((response) => {
            // Don't use handleJsonResponse because json error format is not the same than other WS
            response.json()
                .then(data => {
                    if (response.status === 200) {
                        res(data);
                    } else {
                        const error = {
                            status: response.status,
                            type: data.error,
                            message: data.error_description
                        };
                        rej(error);
                    }
                })
                .catch(e => {
                    const error = {
                        status: response.status,
                        message: `Response is not JSON : ${e.message}`
                    };
                    rej(error);
                });
        }).catch((e) => {
            rej(e);
        });
    }),

    // GET F5 AUTH CODE
    getF5AuthCode: () => new Promise((res, rej) => {
        const params = {
            response_type: 'code',
            client_id: EnvConstants.CLIENT_ID_JWT2,
            redirect_uri: EnvConstants.REDIRECT_URI_JWT2
        };

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            // Only run if the request is complete
            if (xhr.readyState !== 4) return;
            if (xhr.responseURL) {
                res(xhr.responseURL);
            } else {
                rej(xhr.response);
            }
        };

        xhr.open('GET', `${EnvConstants.AUTHENTICATION_F5_URL}?${buildBody(params)}`);
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        xhr.setRequestHeader('Cache-Control', 'no-cache, no-store');
        xhr.timeout = standardTimeout;
        xhr.ontimeout = function () { rej(new Error('xhr timeout')); };
        xhr.send();
    }),

    // GET JWT 2
    getJwt2: (codeF5) => new Promise((res, rej) => {
        const headers = {
            ...deviceInfoHeaders,
            'Content-type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache, no-store'
        };

        const body = {
            grant_type: 'authorization_code',
            client_id: EnvConstants.CLIENT_ID_JWT2,
            client_secret: EnvConstants.CLIENT_SECRET_JWT2,
            redirect_uri: EnvConstants.REDIRECT_URI_JWT2,
            code: codeF5
        };
        fetchWithTimeout(`${EnvConstants.AUTHENTICATION_F5_URL}${WSConstants.ROUTES.GET_JWT_2}`, {
            method: 'POST',
            headers,
            body: buildBody(body)
        }).then((response) => {
            handleJsonResponse(response, res, rej);
        }).catch((e) => {
            rej(e);
        });
    }),

    // REFRESH TOKEN
    refreshToken: (refreshToken) => new Promise((res, rej) => {
        const headers = {
            ...deviceInfoHeaders,
            'Content-type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache, no-store'
        };

        const body = {
            grant_type: 'refresh_token',
            client_id: EnvConstants.CLIENT_ID_JWT2,
            client_secret: EnvConstants.CLIENT_SECRET_JWT2,
            refresh_token: refreshToken
        };

        fetchWithTimeout(`${EnvConstants.AUTHENTICATION_F5_URL}${WSConstants.ROUTES.GET_JWT_2}`, {
            method: 'POST',
            headers,
            body: buildBody(body)
        }).then((response) => {
            handleJsonResponse(response, res, rej);
        }).catch((e) => {
            rej(e);
        });
    }),

    // GET ENCRYPTION KEY
    getSecretKey: () => new Promise((res, rej) => {
        const headers = {
            ...deviceInfoHeaders,
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache, no-store'
        };

        fetchWithTimeout(`${EnvConstants.SECRET_KEY_BASE_URL}${WSConstants.ROUTES.API}v2/${WSConstants.ROUTES.GET_SECRET_KEY}`, {
            method: 'GET',
            headers,
        }).then((response) => {
            handleJsonResponse(response, res, rej);
        }).catch((e) => {
            rej(e);
        });
    }),

    // GET ENVELOPPES
    getEnveloppes: () => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders
        };

        fetchWithTimeout(`${EnvConstants.SECRET_KEY_BASE_URL}${WSConstants.ROUTES.API}v3/${WSConstants.ROUTES.ENVELOPPES}`, {
            method: 'GET',
            headers
        }).then((response) => {
            handleJsonResponse(response, res, rej);
        }).catch((e) => {
            rej(e);
        });
    }),

    // PUT DEVICE INFO
    putDevices: (pushId) => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders,
            PushId: pushId,
        };

        fetchWithTimeout(`${EnvConstants.SECRET_KEY_BASE_URL}${WSConstants.ROUTES.API}v2/${WSConstants.ROUTES.PUT_DEVICES}`, {
            method: 'PUT',
            headers
        }).then((response) => {
            handleJsonResponse(response, res, rej);
        }).catch((e) => {
            rej(e);
        });
    }),

    // GET IMAGE
    getImage: (filename) => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders
        };

        RNFetchBlob
            .config({ fileCache: true })
            .fetch('GET', `${EnvConstants.IMAGE_BASE_URL}${WSConstants.ROUTES.API}v2/${WSConstants.ROUTES.IMAGES}/${filename}`, headers)
            .then((response) => {
                if (response?.respInfo?.status === 200) {
                    res(response.path());
                } else {
                    const e = {
                        status: response?.respInfo?.status,
                        message: response,
                    };
                    rej(e);
                }
            }).catch((e) => {
                rej(e);
            });
    }),

    // POST ValidateUserData
    postValidateUserData: (userData) => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders
        };

        fetchWithTimeout(`${EnvConstants.AUTHENTICATION_BASE_URL}${WSConstants.ROUTES.API}v3/${WSConstants.ROUTES.VALIDATE_USER_DATA}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(userData)
        })
            .then((response) => {
                handleJsonResponse(response, res, rej);
            })
            .catch((e) => {
                rej(e);
            });
    }),

    // POST RecordAccount
    postRecordAccount: (credentials) => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders
        };

        fetchWithTimeout(`${EnvConstants.AUTHENTICATION_BASE_URL}${WSConstants.ROUTES.API}v3/${WSConstants.ROUTES.RECORD_ACCOUNT}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(credentials)
        })
            .then((response) => {
                handleJsonResponse(response, res, rej);
            })
            .catch((e) => {
                rej(e);
            });
    }),

    // GET FamilyGroup
    getFamilyGroupByYear: (year) => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders
        };

        fetchWithTimeout(`${EnvConstants.FAMILY_GROUP_BASE_URL}${WSConstants.ROUTES.API}v1/${WSConstants.ROUTES.FAMILY_GROUP}/${WSConstants.ROUTES.FAMILY_GROUP_SUMMARY}?year=${year}`, {
            method: 'GET',
            headers
        })
            .then((response) => {
                handleJsonResponse(response, res, rej);
            })
            .catch((e) => {
                rej(e);
            });
    }),

    // GET Member contact data by policyNumber
    getMemberContactDataByPolicyNumber: (policyNumber) => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders
        };
        fetchWithTimeout(`${EnvConstants.FAMILY_GROUP_BASE_URL}${WSConstants.ROUTES.API}v1/${WSConstants.ROUTES.FAMILY_GROUP}/${WSConstants.ROUTES.FAMILY_GROUP_CONTACT}?policyNumber=${policyNumber}`, {
            method: 'GET',
            headers
        })
            .then((response) => {
                handleJsonResponse(response, res, rej);
            })
            .catch((e) => {
                rej(e);
            });
    }),

    // GET FAMILY MEMBER CARD
    getFamilyMemberCard: (policyNumber) => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders
        };

        fetchWithTimeout(`${EnvConstants.FAMILY_GROUP_BASE_URL}${WSConstants.ROUTES.API}v1/${WSConstants.ROUTES.FAMILY_GROUP}/${WSConstants.ROUTES.FAMILY_GROUP_COVERCARD}?policyNumber=${policyNumber}`, {
            method: 'GET',
            headers
        }).then((response) => {
            handleJsonResponse(response, res, rej);
        }).catch((e) => {
            rej(e);
        });
    }),

    // GET lokalize/project/mobileApp
    getTranslations: () => new Promise((res, rej) => {
        fetchWithTimeout(`${EnvConstants.CMS_BASE_URL}${WSConstants.ROUTES.CMS_TRANSLATIONS}`, { method: 'GET' })
            .then((response) => {
                handleJsonResponse(response, res, rej);
            })
            .catch((e) => {
                rej(e);
            });
    }),

    // GET collections/get/products
    getCmsProducts: () => new Promise((res, rej) => {
        fetchWithTimeout(`${EnvConstants.CMS_BASE_URL}${WSConstants.ROUTES.CMS_PRODUCTS}`, { method: 'GET' })
            .then((response) => {
                handleJsonResponse(response, res, rej);
            })
            .catch((e) => {
                rej(e);
            });
    }),

    // GET FamilyGroup/products
    getFamilyMemberProducts: (policyNumber) => new Promise((res, rej) => {
        const year = DateUtils.getCurrentYear();
        const route = `${EnvConstants.FAMILY_GROUP_BASE_URL}${WSConstants.ROUTES.API}v1/${WSConstants.ROUTES.FAMILY_GROUP}/${WSConstants.ROUTES.FAMILY_GROUP_PRODUCTS}?userTiersNumber=${policyNumber}&year=${year}`;
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders
        };

        fetchWithTimeout(
            route,
            {
                method: 'GET',
                headers
            })
            .then((response) => {
                handleJsonResponse(response, res, rej);
            })
            .catch((e) => {
                rej(e);
            });
    }),

    // GET collections/get/productCategories
    getCmsCategories: () => new Promise((res, rej) => {
        fetchWithTimeout(`${EnvConstants.CMS_BASE_URL}${WSConstants.ROUTES.CMS_CATEGORIES}`, { method: 'GET' })
            .then((response) => {
                handleJsonResponse(response, res, rej);
            })
            .catch((e) => {
                rej(e);
            });
    }),
    // POST list of product groups
    getSuggestedComplementaries: () => new Promise((res, rej) => {
        const headers = {
            ...defaultHeaders(),
            ...deviceInfoHeaders
        };
        fetchWithTimeout(`${EnvConstants.CMS_BASE_URL}${WSConstants.ROUTES.SUGGESTED_COMPLEMENTARIES}`,
            {
                method: 'POST',
                headers,
                body: JSON.stringify({ filter: { id: 'MOA' } })
            }
        )
            .then((response) => {
                handleJsonResponse(response, res, rej);
            })
            .catch((e) => {
                rej(e);
            });
    })
};
