export default {
    getListIds(List) {
        const watchListIds = [];
        Object.values(List).forEach((List) => watchListIds.push(List.id));
        return watchListIds;
    }
}