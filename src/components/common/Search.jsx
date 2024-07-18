"use client";

import { CCol, CFormInput } from "@coreui/react";
import { SearchNormal } from "iconsax-react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Search({ defaultValue }) {
  const router = useRouter();
  const [inputValue, setValue] = useState(defaultValue);
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };
  const handleSearch = () => {
    if (inputValue) return router.push(`/?q=${inputValue}`);
    if (!inputValue) return router.push("/");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") return handleSearch();
  };
  return (
    <CCol className="d-flex gap-2 align-items-center" xs={4}>
      <SearchNormal /> Search
      <CFormInput
        type="text"
        id="inputId"
        placeholder="Enter your keywords..."
        value={inputValue ?? ""}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </CCol>
  );
  // async function handleSearch(string){
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  // 	if (string) {
  // 		const role_list = [...data];
  // 		const result = role_list.filter((v) => {
  // 			return v.role_name.toLowerCase().includes(string.toLowerCase());
  // 		});
  // 		setData(result);
  // 	} else {
  // 		setData(role_list);
  // 	}
  // }
}
