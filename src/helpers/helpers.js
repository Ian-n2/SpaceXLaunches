export function filterYear(data){

  let years = []

  data.forEach(data => {
    if (!years.includes(data.launch_year)){
      years.push(data.launch_year)
    }
  })
return years;
}




// export function getDate(data){
//
// const unixTime = data;
// const date = new Date(unixTime*1000);
// return (date.toLocaleDateString('en-US'));
// }
