speechbtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (textarea.value = '') {
        if (!synth.speaking) {
         texttospeech(textarea.value)
        }
        if (textarea.value.length > 80) {
            if (isSpeaking) {
                synth.resume()
                isSpeaking = false
                speechbtn.innerHTML = 'Pause Speech'
            } else {
                synth.pause()
                isSpeaking = true
                speechbtn.innerHTML = "Resume Speech"
            }
            setInterval(() => {
                if (!synth.speaking && !isSpeaking) {
                    isSpeaking = true
                    speechbtn.innerHTML = 'Convert To Speech'
                }
            })
        }   else {
            speechbtn.innerHTML = 'Convert To Speech'
        }

    }
})