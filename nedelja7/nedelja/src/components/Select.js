const Select = (options, text) => {
  const select = document.createElement("select");

  const defOpt = document.createElement("option");
  defOpt.value = "-1";
  defOpt.selected = true;
  defOpt.disabled = true;
  defOpt.hidden = true;
  defOpt.textContent = `${text}`;

  select.append(defOpt);

  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    select.append(opt);
  });

  // select.addEventListener('change',()=>{
  //     let tmp = arr.filter(launch => launch.date_utc.startsWith(select.value))
  //     divLaunchList.innerHTML = ''
  //     divLaunchList.append(...Launches(tmp))
  // })

  return select;
};
export default Select;
