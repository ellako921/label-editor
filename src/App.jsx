import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import './App.css'

function App() {
  const [labelText, setLabelText] = useState('라벨 문구');
  const previewRef = useRef(null);

  //이미지 다운로드
  const handleDownload = async () => {
    const canvas = await html2canvas(previewRef.current, {
      scale: 3,
    });

    const link = document.createElement('a');

    link.download = 'label-image.png';
    link.href = canvas.toDataURL('image/png');

    link.click();
  };

  return (
    <div className="app">
      <h1>라벨 인화지 에디터(260627 복사완료 2차)</h1>

      <div className="editor">
        {/* 입력 영역 */}
        <div className="control">
          <label htmlFor="labelText">라벨 문구</label>
          <input
            type="text"
            id="labelText"
            maxLength={20}
            value={labelText}
            onChange={(e) => setLabelText(e.target.value)}
            placeholder="라벨에 들어갈 문구를 입력하세요"
           />

           <button
            className="downloadBtn"
            onClick={handleDownload}
           >
            이미지 저장
           </button>
        </div>

        {/* 미리보기 영역 */}
        <div className="previewArea">
          <h2>미리보기</h2>

          <div
            className="labelPreview"
            ref={previewRef}
            >
            
            <p>{labelText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;