function Button({ AdditonalClass, Name, Text, Link }) {
    return (
        <button className={`${Name} ${AdditonalClass} h-[55px] w-[150px] xl:w-[160px] rounded-full text-sm lg:text-md tracking-wider transition duration-200 hover:-translate-y-0.5`}>
            <a href={`/${Link}`}>
           {Text}
            </a>
        </button>
    )
}

export default Button
