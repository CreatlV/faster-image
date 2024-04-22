import { requireNativeComponent } from 'react-native';
const ComponentName = 'FasterImageView';

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
export const FasterImageView = requireNativeComponent(ComponentName);
//# sourceMappingURL=index.js.map