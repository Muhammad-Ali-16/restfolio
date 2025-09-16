function Button({ AdditonalClass, Name, Text, Link }) {
    return (
        <button className={`${Name} ${AdditonalClass} hidden xl:block bg-[var(--text-secondary)] text-[var(--text-light)] rounded-full px-12 py-5 text-md lg:text-lg xl:text-xl tracking-wider`}>
            <a href={`/${Link}`}>
           {Text}
            </a>
        </button>
    )
}

export default Button
