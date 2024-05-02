/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import styles from "./audio.module.scss";

const formWaveSurferOptions = (ref) => ({
    container: ref,
    waveColor: "rgba(29, 43, 33, 0.66)",
    progressColor: "#0178ff",
    cursorColor: "transparent",
    responsive: true,
    height: 100,
    normalize: true,
    backend: "WebAudio",
    barWidth: 2,
    barGap: 4,
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

const Audio = ({ recordedAudioUrl }) => {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [muted, setMuted] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [audioFileName, setAudioFileName] = useState("");

    useEffect(() => {
        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);

        wavesurfer.current.load(recordedAudioUrl);

        wavesurfer.current.on("ready", () => {
            setVolume(wavesurfer.current.getVolume());
            setDuration(wavesurfer.current.getDuration());
            setAudioFileName(recordedAudioUrl.split("/").pop());
        });

        wavesurfer.current.on("audioprocess", () => {
            setCurrentTime(wavesurfer.current.getCurrentTime());
        });

        return () => {
            wavesurfer.current.un("audioprocess");
            wavesurfer.current.un("ready");
            wavesurfer.current.destroy();
        };
    }, [recordedAudioUrl]);

    useEffect(() => {
        if (formatTime(currentTime) === formatTime(duration)) {
            setPlaying(false);
        }
    }, [currentTime, duration]);

    const handlePlayPause = () => {
        setPlaying(!playing);
        wavesurfer.current.playPause();
    };

    const handleMute = () => {
        setMuted(!muted);
        wavesurfer.current.setVolume(muted ? volume : 0);
    };

    return (
        <div className={styles.container}>
            <button onClick={handlePlayPause} className={styles.play_pause}>
                <FontAwesomeIcon className={styles.icon} icon={playing ? faPause : faPlay} />
            </button>
            <div id="waveform" ref={waveformRef} className={styles.waveform}></div>
            <p className={styles.time}>{formatTime(currentTime ? currentTime : duration)}</p>
            <button onClick={handleMute} className={styles.volume}>
                <FontAwesomeIcon className={styles.icon} icon={muted ? faVolumeMute : faVolumeUp} />
            </button>
        </div>
    );
};

export default Audio;
