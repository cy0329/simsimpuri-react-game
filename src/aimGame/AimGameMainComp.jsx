import { useEffect, useState } from "react";

function AimGame() {
  const [here, setHere] = useState(0)
  const [gridNum, setGridNum] = useState(4)

  const [correct, setCorrect] = useState(0)
  const [allClick, setAllClick] = useState(0)

  const onClickAimBall = () => {
    if (correct === 49) {
      setHere(0)
      setCorrect(correct+1)
    } else {
      let num = Math.floor(Math.random() * (gridNum**2)) + 1
    while (num === here) {
      num = Math.floor(Math.random() * (gridNum**2)) + 1
    }
    setHere(num)
    setCorrect(correct+1)
    }
  }

  const onClickDiv = () => {
    setAllClick(allClick+1)
  }

  const onChangeGridNum = (e) => {
    if (e.target.value > 20) {
      alert("최대 수치는 20입니다.")
    } else if (e.target.value === '1') {
      alert("최소 수치는 2입니다.")
    } else {
      setGridNum(e.target.value === '' ? 4 : e.target.value)
      setHere(0)
    }
  }

  const [mapper, setMapper] = useState([])
  useEffect(() => {
    setMapper([...Array(gridNum**2)])
  }, [gridNum])
  
  const onClickStart = (e) => {
    onClickAimBall(e)
    setCorrect(0)
    setAllClick(0)
  }
  
  

  return (
  <>
    <div className="flex items-center justify-center mt-5 mb-3">
      <div>
        <h2 className=" text-2xl font-bold">
          에임 맞추기 
        </h2>
        <input name="gnSelect" type="number" min={2} onChange={onChangeGridNum} className="p-2 border-2 rounded-lg mr-4 w-96" placeholder="그리드 크기 : 입력값 제곱, 기본 : 4, min2~max20" />
        <button onClick={e => onClickStart(e)} className="py-3 px-5 bg-green-400 hover:bg-green-800 text-black hover:text-white font-bold text-lg rounded-lg duration-200">시작</button>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className={`grid grid-cols-${gridNum} grid-rows-${gridNum}`} style={{ width: "600px", height: "600px", maxWidth:"600px", maxHeight: "600px"}}>
        {mapper.map((item, index) => {
          return (
            <div className="bg-green-200 w-full h-full border border-slate-300" key={index+1} onClick={onClickDiv}>
              {here === index+1 && <button className="rounded-full bg-black w-full h-full" onClick={onClickAimBall}></button>}
            </div>
          )
        })}
      </div>
    </div>
    <div id="score" className=" mt-10">
      <span className="text-sm font-semibold border-2 border-green-400 p-2 rounded-md">횟수: {correct} / 50</span>
      <span className="text-sm font-semibold border-2 border-green-400 p-2 rounded-md">정확: {correct}</span>
      <span className="text-sm font-semibold border-2 border-green-400 p-2 rounded-md">틀림: {allClick-correct}</span>
      <span className="text-sm font-semibold border-2 border-green-400 p-2 rounded-md">시간: {}</span>
    </div>
  </>
  )
}

export default AimGame;