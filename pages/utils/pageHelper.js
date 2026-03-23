// pageHelper.js

/**
 * Helper function to manage pagination
 * @param {Array} items - The array of items to paginate
 * @param {number} page - The current page number
 * @param {number} pageSize - The number of items per page
 * @returns {Array} - A slice of the items array representing the items on the current page
 */
const paginate = (items, page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
};

module.exports = {
    paginate,
};