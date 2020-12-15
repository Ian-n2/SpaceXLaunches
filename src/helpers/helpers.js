export function filterYear(data){

  let years = []

  data.forEach(data => {
    if (!years.includes(data.launch_year)){
      years.push(data.launch_year)
    }
  })
return years;
}
