import { useState, useRef } from 'react';
import HeroImg from "../smallComponents/heroImg/HeroImg";
import styles from "./VoiceRecorder.module.scss";
import voistWhiteLogo from "../../assets/img/voistWhiteLogo.svg";
import microphone from "../../assets/img/microphone.svg";
import stopCircle from "../../assets/img/stopCircle.svg";
import checkWhiteIcon from "../../assets/img/checkWhiteIcon.svg";

function VoiceRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);
    const [isMicrophoneVisible, setIsMicrophoneVisible] = useState(true);
    const [recordedAudioUrl, setRecordedAudioUrl] = useState('');
    const [isButtonsVisible, setIsButtonsVisible] = useState(false);
    const [isSendButtonVisible, setIsSendButtonVisible] = useState(true);

    const handleRecording = async () => {
        if (!isRecording) {
            setRecordedAudioUrl('');
            chunksRef.current = [];

            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;

                mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        chunksRef.current.push(event.data);
                    }
                };

                mediaRecorder.onstop = () => {
                    const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
                    const url = URL.createObjectURL(blob);
                    setRecordedAudioUrl(url);
                    setIsMicrophoneVisible(true);
                    setIsButtonsVisible(true);
                    setIsSendButtonVisible(false);
                };

                mediaRecorder.start();
                setIsRecording(true);
                setIsMicrophoneVisible(false);
            } catch (error) {
                console.error('Error accessing microphone:', error);
            }
        } else {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            setIsMicrophoneVisible(true);
            setIsButtonsVisible(false);
            setIsSendButtonVisible(true);
        }
    };

    const handleRecAgain = () => {
        window.location.reload();
    };

    return (
        <div className={styles.container}>
            <div className={styles.rightImage}>
                <HeroImg />
            </div>
            <div className={styles.left__side}>
                <header>
                    <div className={styles.logo}>
                        <img src={voistWhiteLogo} alt="Voist Logo" />
                    </div>
                </header>
                <main>
                    <div className={styles.mainContainer}>
                        <div className={styles.rightDesc}>
                            <h2 className={styles.header}>Oh, I see that it’s your first time using this account.</h2>
                            <p className={styles.paragraph}>In order to identify your voice during calls, please, record a short voice message for us 😇.</p>
                        </div>
                        <div className={styles.infoDesc}>
                            <p className={styles.paragraph}>Click to record button and read the text below.</p>
                            <h3 className={styles.header}>Lorem ipsum dolor sit amet consectetur. Tortor mauris vestibulum amet praesent urna lacus euismod et at. Sed urna interdum sit bibendum in. Nec tincidunt eleifend convallis egestas adipiscing.</h3>
                        </div>
                        <div className={styles.buttonContainer}>
                            {recordedAudioUrl && (
                                <div className={styles.recordedAudio}>
                                    <audio className={styles.audio} controls controlsList="nodownload noremoteplayback">
                                        <source src={recordedAudioUrl} type="audio/webm" />
                                    </audio>
                                </div>
                            )}

                            <button
                                className={`${styles.sendButton} ${isRecording ? styles.recordingButton : ''} ${isSendButtonVisible ? styles.sendButtonVisible : styles.sendButtonHidden}`}
                                onClick={handleRecording}
                            >
                                {isMicrophoneVisible && (
                                    <img src={microphone} alt="Microphone icon" />
                                )}
                                <img className={styles.stopCircle} src={stopCircle} alt="Stop circle icon" />
                                {isRecording ? 'Stop recording' : 'Start recording'}
                            </button>
                            <div className={`${styles.buttons} ${isButtonsVisible ? styles.buttonsVisible : ''}`}>
                                <button className={styles.sendButton}>
                                    <img className={styles.checkIcon} src={checkWhiteIcon} alt="Check icon" />
                                    Send
                                </button>
                                <button className={styles.recAgainBtn} onClick={handleRecAgain}>
                                    <img className={styles.microphone} src={microphone} alt="Microphone icon" />
                                    Record again
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default VoiceRecorder;
