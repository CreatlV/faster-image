import { ImageStyle } from 'react-native';
export type IOSImageResizeMode = 'fill' | 'contain' | 'cover' | 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
export type AndroidImageResizeMode = 'fill' | 'contain' | 'cover' | 'center' | 'top' | 'bottom';
export type ImageOptions = {
    blurhash?: string;
    thumbhash?: string;
    resizeMode?: IOSImageResizeMode | AndroidImageResizeMode;
    borderRadius?: number;
    showActivityIndicator?: boolean;
    transitionDuration?: number;
    cachePolicy?: 'memory' | 'discWithCacheControl' | 'discNoCacheControl';
    failureImage?: string;
    progressiveLoadingEnabled?: boolean;
    base64Placeholder?: string;
    url: string;
    grayscale?: number;
    allowHardware?: boolean;
};
/**
 * FasterImageProps
 * @typedef FasterImageProps
 * @property {ViewStyle} style - Style of the image
 * @property {ImageOptions} source - Image source
 * @property {(result: { nativeEvent: { error: string } }) => void} [onError] - Callback for when an error occurs
 * @property {(result: { nativeEvent: { width: number; height: number; source: string; } }) => void} [onSuccess] - Callback for when the image loads successfully
 * */
export type FasterImageProps = {
    style: ImageStyle;
    source: ImageOptions;
    onError?: (result: {
        nativeEvent: {
            error: string;
        };
    }) => void;
    onSuccess?: (result: {
        nativeEvent: {
            width: number;
            height: number;
            source: string;
        };
    }) => void;
};
/**
 * FasterImageView is a React Native component that renders an Image on iOS.
 * * Image types supported: PNG & JPEG.
 * * Supports blurhash, base64 placeholders, and caching.
 * * Backed by [Nuke](https://github.com/kean/Nuke.git), a small, performant image loading library written in Swift.
 * @param props: FasterImageProps
 * @returns FasterImageView
 * @example
 * import { FasterImageView } from '@candlefinance/faster-image';
 *
 * <FasterImageView
 *    onSuccess={(event) => console.warn(event.nativeEvent.cacheKey)}
 *    onError={(event) => console.warn(event.nativeEvent.error)}
 *    style={{ width: 200, height: 200 }}}
 *  source={{
 *   transitionDuration: 0.3,
 *   cachePolicy: 'discWithCacheControl',
 *   showActivityIndicator: true,
 *   failureImage: 'k0oGLQaSVsJ0BVhn2oq2Z5SQUQcZ',
 *   url: 'https://picsum.photos/200/200?random=1',
 * }}
 * />
 * */
export declare const FasterImageView: import("react-native").HostComponent<FasterImageProps>;
//# sourceMappingURL=index.d.ts.map