// import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function useURLSearchParam(paramName, initialValue = "") {

  const [searchParams, setSearchParams] = useSearchParams();
  // Directly get the value from searchParams
  // searchParams から値を直接取得します
  const paramValue = searchParams.get(paramName) || initialValue;

  const setParamValue = (value) => {
    if (value) {
      // Update only the specific parameter, and preserve the others.
      // 特定のパラメータのみを更新し、その他は保持します。
      // setSearchParams({ ...searchParams, [paramName]: value })
      //
      setSearchParams({ ...Object.fromEntries(searchParams), [paramName]: value })
    } else {
      // Remove the parameter if its value is falsy.
      searchParams.delete(paramName);
      setSearchParams(searchParams);
    }
  }
  return [paramValue, setParamValue];
}

export default useURLSearchParam;
