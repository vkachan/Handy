import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { useSettings } from "../../hooks/useSettings";

interface UncapitalizeTranscriptionsProps {
  descriptionMode?: "inline" | "tooltip";
  grouped?: boolean;
}

export const UncapitalizeTranscriptions: React.FC<UncapitalizeTranscriptionsProps> =
  React.memo(({ descriptionMode = "tooltip", grouped = false }) => {
    const { t } = useTranslation();
    const { getSetting, updateSetting, isUpdating } = useSettings();

    const enabled = getSetting("uncapitalize_transcriptions") ?? false;

    return (
      <ToggleSwitch
        checked={enabled}
        onChange={(checked) =>
          updateSetting("uncapitalize_transcriptions", checked)
        }
        isUpdating={isUpdating("uncapitalize_transcriptions")}
        label={t("settings.general.uncapitalize.label")}
        description={t("settings.general.uncapitalize.description")}
        descriptionMode={descriptionMode}
        grouped={grouped}
      />
    );
  });
