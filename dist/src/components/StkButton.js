"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
    background: ${props => props.color === undefined ? "green" : props.color};
    color:  ${props => props.isprimary ? "white" : "black"};
    padding: 1em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    &:hover {
        box-shadow: 0 0 10px 10px #3498db;
        background: transparent;
        color: #FFFFFF;
    }
    @media (max-width: 768px) {
        background: blue;
    }
`;
function StkButton({ isprimary, color, txt }) {
    return (react_1.default.createElement(StyledButton, { isprimary: isprimary, color: color }, txt));
}
exports.default = StkButton;
;
