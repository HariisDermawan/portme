export async function compressImage(
    file: File,
    maxDimension = 1600,
    quality = 0.8,
): Promise<File> {
    if (!file.type.startsWith('image/')) {
        return file;
    }

    try {
        const bitmap = await createImageBitmap(file);
        const scale = Math.min(
            1,
            maxDimension / Math.max(bitmap.width, bitmap.height),
        );
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(bitmap.width * scale));
        canvas.height = Math.max(1, Math.round(bitmap.height * scale));

        const context = canvas.getContext('2d');

        if (!context) {
            return file;
        }

        context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        bitmap.close();

        const outputType =
            file.type === 'image/png' || file.type === 'image/webp'
                ? file.type
                : 'image/jpeg';
        const extension =
            outputType === 'image/png'
                ? 'png'
                : outputType === 'image/webp'
                  ? 'webp'
                  : 'jpg';

        const blob = await new Promise<Blob | null>((resolve) => {
            canvas.toBlob(resolve, outputType, quality);
        });

        if (!blob || blob.size >= file.size) {
            return file;
        }

        return new File(
            [blob],
            `${file.name.replace(/\.[^./\\]+$/, '')}.${extension}`,
            { type: outputType, lastModified: Date.now() },
        );
    } catch {
        return file;
    }
}
