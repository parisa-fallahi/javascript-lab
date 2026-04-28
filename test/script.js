
const res = [
    {key:'test',value:'weyutywe'},
    {key:'test1',value:'test-1-1'},
    {key:'test2',value:'test-2-2'},
    {key:'test3',value:'weyutywe'},
    {key:'test4',value:'weyutywe'},
    {key:'test5',value:'weyutywe'},
]


    const _test = res.map((i)=>{
      const _value = i.value;
      const findText = _value.slice(0,8)
      if(findText === "weyutywe"){
        return findText
      }
    }) 

    console.log(_test)