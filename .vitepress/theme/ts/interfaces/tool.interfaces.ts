export interface ToolConfig {
    name: string
    url: string
    license?: string
    developer?: string
    info: string
    links?: ToolLink[]
    commdline?: boolean
}

export interface ToolLink {
    name: string
    url: string
}