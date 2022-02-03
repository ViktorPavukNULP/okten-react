export interface ILaunch {
    "mission_name": string,
    "launch_date_local": string,
    "launch_site": {
        "site_name_long": string
    },
    "links": {
        "article_link": string | null,
        "video_link": string | null
    },
    "rocket": IRocket
}

export interface IRocket {
    "rocket_name": string,
    "first_stage": {
        "cores": ICore[]
    },
    "second_stage": {
        "payloads": IPayload[]
    }
}

export interface ICore {
    "flight": number,
    "core": {
        "reuse_count": number,
        "status": string
    }
}

export interface IPayload {
    "payload_type": string,
    "payload_mass_kg": number,
    "payload_mass_lbs": number
}