type FilterDropDownProps = {
    label: string;
    options: string[],
    selected: string,
    onChange: (value:string)=>void
}

const FilterDropDown = ({
    label,
    options,
    selected,
    onChange
}:FilterDropDownProps) => {

  return (
    <div>
      <label className='text-sm block md-1'>{label}</label>
      <select className="p-2 border rounded w-full" value={selected} onChange={(e)=> onChange(e.target.value)} id="">
        <option value="">All</option>
        {
            options.map(opt=>(
                <option key={opt} value={opt}>
                    {opt}
                </option>
            ))
        }
      </select>
    </div>
  )
}

export default FilterDropDown
