import React, { useState } from 'react'
import AutoSuggest from "react-autosuggest";
import './menuBar.scss'
const companies: string[] = [
    "AAV - HNX.NY - Công ty Cổ phần AAV Group",
    "ADC - HNX.NY - Công ty Cổ phần Mỹ thuật và Truyền Thông",
    "ALT - HNX.NY - Công ty Cổ phần Văn hóa Tân Bình",
    "AMC - HNX.NY - Công ty Cổ phần Khoáng Sản Á Châu",
    "AME - HNX.NY - Công ty Cổ phần Alphanam E&C",
    "AMV - HNX.NY - Công ty Cổ phần Sản xuất kinh doanh dược và trang thiết bị Y tế Việt Mỹ",
    "API - HNX.NY - Công ty Cổ phần Đầu tư Châu Á - Thái Bình Dương",
    "APS - HNX.NY - Công ty Cổ phần Chứng khoán Châu Á Thái Bình Dương",
    "ARM - HNX.NY - Công ty Cổ phần Xuất nhập khẩu Hàng không",
]
const DropDown = () => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
  
    function getSuggestions(value: string): string[] {
      return companies.filter(company =>
        company.toLowerCase().startsWith(value.trim().toLowerCase())
      );
    }
    function renderSuggestion(suggestion: string): JSX.Element {
      const suggestionElements: JSX.Element[] = [];
      const words = suggestion.split(' ');
    
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.toLowerCase().startsWith(value.trim().toLowerCase())) {
          const startIndex = word.toLowerCase().indexOf(value.trim().toLowerCase());
          const endIndex = startIndex + value.length;
    
          const highlightedPart = word.substring(startIndex, endIndex);
          const restPart = word.substring(endIndex);
    
          suggestionElements.push(
            <span key={i}>
              <span style={{ color: 'red',fontWeight:'bold' }}>{highlightedPart}</span>
              {restPart}{' '}
            </span>
          );
        } else {
          suggestionElements.push(<span key={i}>{word} </span>);
        }
      }
    
      return <span>{suggestionElements}</span>;
    }
    function handleSuggestionSelected(_: React.FormEvent<any>, { suggestionValue }: { suggestionValue: string }) {
     console.log("oke")
    }
    
    return (
        
      <div>
        <AutoSuggest
          suggestions={suggestions}
          onSuggestionsClearRequested={() => setSuggestions([])}
          onSuggestionsFetchRequested={({ value }) => {
            setValue(value);
            setSuggestions(getSuggestions(value));
          }}
          
          onSuggestionSelected={handleSuggestionSelected}
          getSuggestionValue={suggestion => suggestion}
          renderSuggestion={renderSuggestion}
          // shouldRenderSuggestions = false
          inputProps={{
            placeholder: "Thêm mã vào danh mục",
            value: value,
            onChange: (_, { newValue, method }) => {
              setValue(newValue.toUpperCase());
            }
          }}
          highlightFirstSuggestion={true}
        />
        
      </div>
    );
}

export default DropDown