import React from "react";

/**
 * Returns the local image path for use in Next.js Image component.
 * Next.js will handle 404 gracefully and show the fallback.
 */
export function getImageSrc(localPath: string): string {
  if (localPath.startsWith("/images/")) {
    return localPath;
  }
  return localPath;
}

/**
 * Error handler for image loading failures.
 * Sets the src to the fallback URL when a local image fails to load.
 */
export function onImageError(
  e: React.SyntheticEvent<HTMLImageElement>,
  fallbackUrl: string
): void {
  e.currentTarget.src = fallbackUrl;
}

/**
 * Hook to check if an image exists locally.
 * Returns true if the image should be attempted to load locally.
 */
export function shouldUseLocalImage(localPath: string): boolean {
  return localPath.startsWith("/images/");
}
