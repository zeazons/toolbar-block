// export const BASE_URL = "<base_url>";
// export const URL_SEND_EVENT = `${BASE_URL}/<api_sendEvent>`;

// const URI_BASE = "https://apimtoolkitweb.beebuddy.net/apis/rpc/canvas/v1/";
const URI_BASE = "https://toolkitapigw.beebuddy.net/apis/rpc/canvas/v1/";
const URI = "http://apimtoolkitweb.beebuddy.net/apis/canvas/v1.0/";

export const URL_LIST_WIDGETS = `${URI_BASE}ListNode`;

export const URL_OPEN_FLOW = `${URI_BASE}OpenFlow`;
export const URL_EDIT_FLOW = `${URI_BASE}EditFlow`;
export const URL_SAVE_FLOW = `${URI_BASE}SaveFlow`;
export const URL_UNDO_FLOW = `${URI_BASE}UndoFlow`;
export const URL_REDO_FLOW = `${URI_BASE}RedoFlow`;
export const URL_GET_NODE_PROPERTY = `${URI}getWidgetProperties`;
export const URL_SAVE_NODE_PROPERTY = `${URI_BASE}SaveNodeProperty`;

export const METHOD_OPEN_FLOW = `<method_openflow>`;
export const METHOD_SAVE_FLOW = `<method_saveFlow>`;
export const METHOD_UNDO_FLOW = `<method_undo>`;
export const METHOD_REDO_FLOW = `<method_redo>`;
export const METHOD_LIST_WIDGETS = `<method_list_widgets>`;
