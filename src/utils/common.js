export function combineUrlParams(url = "", params = {}) {
    const keys = Object.keys(params);
    const paramUrl = keys
      .reduce(
        (result, key) =>
          (
            Array.isArray(params[key])
              ? params[key].length > 0
              : params[key] ||
                params[key] === 0 ||
                typeof params[key] === "boolean"
          )
            ? [...result, `${key}=${params[key]}`]
            : [...result],
        []
      )
      .join("&");
    return `${url}?${paramUrl}`;
  }

  Number.prototype.formatPrice = function () {
    return this.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace(".00", "").replace(/,/g, ".");
  }
  String.prototype.formatPrice = function () {
    try {
        return parseInt(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace(".00", "").replace(/,/g, ".");
    } catch (error) {
  
    }
    return this;
  }