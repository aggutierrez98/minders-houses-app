"use client";
import { useEffect, createContext } from "react";
import { init, track } from "@amplitude/analytics-browser";
import { shouldBeDefined } from "../lib/utils";

const AMPLITUDE_API_KEY = shouldBeDefined(
  process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY,
  "AMPLITUDE_API_KEY"
);

export interface AmplitudeContextProps {
  trackAmplitudeEvent: (
    eventName: string,
    eventProperties: Record<string, unknown>
  ) => void;
}

export const AmplitudeContext = createContext({} as AmplitudeContextProps);

const AmplitudeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    init(AMPLITUDE_API_KEY, undefined, {
      defaultTracking: {
        sessions: true,
        attribution: false,
      },
    });
  }, []);

  const trackAmplitudeEvent = (
    eventName: string,
    eventProperties: object | undefined
  ) => {
    track(eventName, eventProperties);
  };

  // const identifyUser = (
  //   eventName: string,
  //   eventProperties: object | undefined
  // ) => {
  //   identify("uiser", {});
  // };

  return (
    <AmplitudeContext.Provider value={{ trackAmplitudeEvent }}>
      {children}
    </AmplitudeContext.Provider>
  );
};

export default AmplitudeContextProvider;
