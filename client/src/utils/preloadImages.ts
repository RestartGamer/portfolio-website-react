export function preloadImages(sources: string[]) {
    if (typeof document === "undefined") {
        return
    }

    const uniqueSources = [...new Set(sources)]
    const existingPreloads = new Set(
        Array.from(
            document.querySelectorAll<HTMLLinkElement>(
                'link[rel="preload"][as="image"]'
            )
        ).map((link) => link.href)
    )

    uniqueSources.forEach((source) => {
        const absoluteSource = new URL(source, document.baseURI).href

        if (!existingPreloads.has(absoluteSource)) {
            const link = document.createElement("link")
            link.rel = "preload"
            link.as = "image"
            link.href = source
            document.head.appendChild(link)
            existingPreloads.add(absoluteSource)
        }

        const image = new Image()
        image.decoding = "async"
        image.src = source
    })
}
