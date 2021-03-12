import React from "react";
import TodoApp from "./TodoApp";
import { render } from "@testing-library/react";

describe("<TodoApp />", () => {
  // UI 구성하기
  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId } = render(<TodoApp />);
    getByText("확인"); // TodoForm 존재유무 확인
    getByTestId("TodoList"); // TodoList 존재유무 확인, data-testid를 의미한다.
  });
});
