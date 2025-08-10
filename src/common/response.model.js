"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = exports.Paging = exports.WebResponse = void 0;
class WebResponse {
    code;
    message;
    payload;
    errors;
    metadata;
    total_data;
}
exports.WebResponse = WebResponse;
class Paging {
    per_page;
    total_data;
    current_page;
}
exports.Paging = Paging;
class ErrorResponse {
    errors;
}
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=response.model.js.map