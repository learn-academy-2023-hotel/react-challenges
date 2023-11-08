const BadRobot = (props) => {
    const blaWord = "bla"
    const blaBlaText = blaWord.repeat(99).slice(0, props.name.length)

    return(
        <>
            <h3>Bad Robot</h3>
            I hear you saying {blaBlaText}. Is that correct?
        </>
    )
}

export default BadRobot