import React from "react";
import { create } from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Hello from "../components/Hello";
import { exportAllDeclaration } from "@babel/types";


let container: Element = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


describe("Hello component", () => {
    test("dummy Test", () => {
        expect(true).toBeTruthy();
    });
});