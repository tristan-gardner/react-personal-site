import { CarrouselContent } from "./Carrousel";

const makeContent = (url: string, isVideo: boolean = false): CarrouselContent => {
    return {
        source: url,
        isVideo
    }
}

export const watererContent = [
    makeContent("https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686787611/parts_lkhfxp.jpg"),
    makeContent("https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686787572/wiring_u3dngn.jpg"),
    makeContent("https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686787572/motor_setup_qqheg8.jpg"),
    makeContent("https://res.cloudinary.com/dgnqdbhjg/video/upload/v1686788042/plantless_azgfhj.mov", true),
    makeContent("https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686787555/diagram_dqa4dt.png"),
    makeContent("https://res.cloudinary.com/dgnqdbhjg/video/upload/v1686787790/final_silsiq.mov", true),
]

export const nobotContent = [
    makeContent("https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686788047/homepage_dsuisd.png"),
    makeContent("https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686788045/email_lyewh3.png"),
]

export const speakerContent = [
    makeContent("https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686789585/board_ob3frt.png"),
    makeContent("https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686789587/amp_f0hl7p.png"),
    makeContent("https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686789586/exciter_pyxzic.png"),
    makeContent("https://res.cloudinary.com/dgnqdbhjg/image/upload/v1686789590/speaker_ymnldv.png"),
    makeContent("https://res.cloudinary.com/dgnqdbhjg/video/upload/v1686789595/speaker_rp8ryq.mov", true),
]

export const slackronymContent = [
    makeContent("https://res.cloudinary.com/dgnqdbhjg/video/upload/v1687977570/slackronym_bdpooi.mp4", true),
    makeContent("https://res.cloudinary.com/dgnqdbhjg/image/upload/v1687977712/slack_message_kqhcp9.png"),
]