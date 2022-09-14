sppechbtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (textarea.value = '') {
        if (!synth.speaking) {
            texttospeech(textarea.value)
        }
        if (textarea.value.length > 80) {
            if (isSpeaking) {
                synth.resume()
                isSpeaking = false
                speechbtn.innerhtml = 'Pause Speech'
            } else {
                synth.pause()
                isSpeaking = true
                sppechbtn.innerhtml = "Resume Speech"
            }
            setInterval(() => {
                if (!synth.speaking && !isSpeaking) {
                    isSpeaking = true
                    speechbtn.innerhtml = 'Convert To Speech'
                }
            })
        }

        }
    }
)