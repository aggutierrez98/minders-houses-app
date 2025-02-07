"use client";
import { useEffect, createContext } from "react";
import {
  init,
  track,
  Types,
  reset,
  setUserId,
} from "@amplitude/analytics-browser";
import { shouldBeDefined } from "@/lib/utils";
import Storage from "@/lib/storage";

const AMPLITUDE_API_KEY = shouldBeDefined(
  process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY,
  "AMPLITUDE_API_KEY"
);

export type PromiseResult<T> = { promise: Promise<T | void> };

type TrackAmplitudeEvent = (
  event: Types.BaseEvent,
  eventProperties?: Record<string, unknown>,
  eventOptions?: Types.EventOptions
) => Types.AmplitudeReturn<Types.Result> | undefined;

export interface AmplitudeContextProps {
  trackAmplitudeEvent: TrackAmplitudeEvent;
  reset: () => void;
  identify: (userId: string) => void;
}

export const AmplitudeContext = createContext({} as AmplitudeContextProps);

const AmplitudeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userId = Storage.getItem("user-id");

  useEffect(() => {
    init(AMPLITUDE_API_KEY, userId, {
      defaultTracking: {
        sessions: true,
        attribution: false,
      },
    });
  }, [userId]);

  const identify = (userId: string) => {
    setUserId(userId);
  };

  const trackAmplitudeEvent: TrackAmplitudeEvent = (event, eventProperties) => {
    try {
      return track(event, eventProperties);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AmplitudeContext.Provider value={{ trackAmplitudeEvent, reset, identify }}>
      {children}
    </AmplitudeContext.Provider>
  );
};

export default AmplitudeContextProvider;
