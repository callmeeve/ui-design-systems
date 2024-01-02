"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledFlexRow = styled_components_1.default.div `
    display: flex;
    gap: ${props => props.jarak === undefined ? "1em" : props.jarak};
    justify-content: ${props => props.justify === undefined ? "flex-start" : props.justify};
    align-items: ${props => props.align === undefined ? "flex-start" : props.align};
`;
function FlexRow({ jarak, justify, align, children }) {
    return (react_1.default.createElement(StyledFlexRow, { jarak: jarak, justify: justify, align: align }, children));
}
exports.default = FlexRow;
;
