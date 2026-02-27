export type WebcamStatus =
  | "ok"
  | "permission_denied"
  | "no_device"
  | "in_use_elsewhere"
  | "blocked_by_browser"
  | "unknown_error";

export type WebcamQuality = "low" | "hd" | "full_hd" | "unknown";

export interface WebcamDiagnostic {
  status: WebcamStatus;
  quality: WebcamQuality;
  width?: number;
  height?: number;
}

interface DeriveArgs {
  error: unknown;
  stream: MediaStream | null;
  resolution: { w: number; h: number } | null;
}

export function deriveWebcamDiagnostic({
  error,
  stream,
  resolution,
}: DeriveArgs): WebcamDiagnostic {
  const height = resolution?.h ?? 0;

  const quality: WebcamQuality =
    height >= 1080 ? "full_hd" :
    height >= 720 ? "hd" :
    height > 0 ? "low" :
    "unknown";

  if (stream) {
    return {
      status: "ok",
      quality,
      width: resolution?.w,
      height: resolution?.h,
    };
  }

  const errorName =
    typeof error === "string"
      ? error
      : (error as any)?.name ?? "";

  const normalized = errorName || "";

  if (
    normalized.includes("NotAllowedError") ||
    normalized.includes("PermissionDeniedError")
  ) {
    return {
      status: "permission_denied",
      quality,
      width: resolution?.w,
      height: resolution?.h,
    };
  }

  if (
    normalized.includes("NotFoundError") ||
    normalized.includes("DevicesNotFoundError")
  ) {
    return {
      status: "no_device",
      quality,
      width: resolution?.w,
      height: resolution?.h,
    };
  }

  if (
    normalized.includes("NotReadableError") ||
    normalized.includes("TrackStartError")
  ) {
    return {
      status: "in_use_elsewhere",
      quality,
      width: resolution?.w,
      height: resolution?.h,
    };
  }

  if (normalized.includes("SecurityError")) {
    return {
      status: "blocked_by_browser",
      quality,
      width: resolution?.w,
      height: resolution?.h,
    };
  }

  if (error) {
    return {
      status: "unknown_error",
      quality,
      width: resolution?.w,
      height: resolution?.h,
    };
  }

  return {
    status: "unknown_error",
    quality,
    width: resolution?.w,
    height: resolution?.h,
  };
}

