import { Texture, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export interface TextureSet {
    diffuse?: Texture;
    normal?: Texture;
    displacement?: Texture;
    ambientOcclusion?: Texture;
    roughness?: Texture;
}


export const useTexture = (texturePath: string): Texture => {
    return useLoader(TextureLoader, texturePath);
};

export const useTextureSet = (textureName: string): TextureSet => {
    const basePath = '/texture/';

    // Завантажуємо всі текстури паралельно
    const diffuse = useLoader(TextureLoader, `${basePath}${textureName}_diff_1k.jpg`);
    const normal = useLoader(TextureLoader, `${basePath}${textureName}_nor_gl_1k.exr`);
    const displacement = useLoader(TextureLoader, `${basePath}${textureName}_disp_1k.png`);
    const ambientOcclusion = useLoader(TextureLoader, `${basePath}${textureName}_ao_1k.jpg`);
    const roughness = useLoader(TextureLoader, `${basePath}${textureName}_rough_1k.exr`);

    return {
        diffuse,
        normal,
        displacement,
        ambientOcclusion,
        roughness
    };
};
 
export const useOakVeneerTextures = (): TextureSet => {
    return useTextureSet('oak_veneer_01');
}; 

export const downloadTexture = async (textureName: string): Promise<TextureSet> => {
    const loader = new TextureLoader();
    const basePath = '/texture/';

    const textureSet: TextureSet = {};

    try {
        // Завантажуємо дифузну текстуру (основна текстура)
        if (await textureExists(`${basePath}${textureName}_diff_1k.jpg`)) {
            textureSet.diffuse = await new Promise<Texture>((resolve, reject) => {
                loader.load(
                    `${basePath}${textureName}_diff_1k.jpg`,
                    resolve,
                    undefined,
                    reject
                );
            });
        }

        // Завантажуємо нормальну карту
        if (await textureExists(`${basePath}${textureName}_nor_gl_1k.exr`)) {
            textureSet.normal = await new Promise<Texture>((resolve, reject) => {
                loader.load(
                    `${basePath}${textureName}_nor_gl_1k.exr`,
                    resolve,
                    undefined,
                    reject
                );
            });
        }

        // Завантажуємо карту висот (displacement)
        if (await textureExists(`${basePath}${textureName}_disp_1k.png`)) {
            textureSet.displacement = await new Promise<Texture>((resolve, reject) => {
                loader.load(
                    `${basePath}${textureName}_disp_1k.png`,
                    resolve,
                    undefined,
                    reject
                );
            });
        }

        // Завантажуємо карту ambient occlusion
        if (await textureExists(`${basePath}${textureName}_ao_1k.jpg`)) {
            textureSet.ambientOcclusion = await new Promise<Texture>((resolve, reject) => {
                loader.load(
                    `${basePath}${textureName}_ao_1k.jpg`,
                    resolve,
                    undefined,
                    reject
                );
            });
        }

        // Завантажуємо карту шорсткості
        if (await textureExists(`${basePath}${textureName}_rough_1k.exr`)) {
            textureSet.roughness = await new Promise<Texture>((resolve, reject) => {
                loader.load(
                    `${basePath}${textureName}_rough_1k.exr`,
                    resolve,
                    undefined,
                    reject
                );
            });
        }

        return textureSet;
    } catch (error) {
        console.error('Помилка завантаження текстур:', error);
        throw error;
    }
};

/**
 * @deprecated Використовуйте useTexture замість цієї функції
 */
const textureExists = async (url: string): Promise<boolean> => {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
};

/**
 * @deprecated Використовуйте useTexture замість цієї функції
 */
export const downloadSingleTexture = (texturePath: string): Promise<Texture> => {
    const loader = new TextureLoader();

    return new Promise<Texture>((resolve, reject) => {
        loader.load(
            texturePath,
            resolve,
            undefined,
            reject
        );
    });
};

/**
 * @deprecated Використовуйте useOakVeneerTextures замість цієї функції
 */
export const downloadOakVeneerTextures = (): Promise<TextureSet> => {
    return downloadTexture('oak_veneer_01');
};