"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledLink = styled_components_1.default.a `
    color: ${props => props.color !== undefined ? props.color : '#FFFFFF'};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;
function Link({ href, target, label, color }) {
    return (react_1.default.createElement(StyledLink, { href: href, target: target, color: color }, label));
}
exports.default = Link;
;
