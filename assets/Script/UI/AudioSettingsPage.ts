import { D, G } from "../General/GameData";
import { ifTrue } from "../General/Helper";
import { t } from "../General/i18n";
import { leftOrRight, uiBoxToggle, uiBoxToggleContent, uiBoxRangeSlider, uiHeaderActionBack } from "./UIHelper";
import { routeTo } from "./UISystem";

export function AudioSettingsPage(): m.Component {
    return {
        oncreate: () => {
            document.getElementById("sfxVolumeSilder").disabled = D.persisted.isSFXVolumeOverride;
        },
        view: () => {
            return m("div.modal", { class: leftOrRight() }, [
                uiHeaderActionBack(t("GameSettingAudio"), () => routeTo("/settings")),
                m(".scrollable", [
                    m(".box.audiosettings", [
                        m(".title", t("GameSettingGeneral")),
                            m(".hr"),
                            uiBoxToggle(t("Music"), t("MusicDesc"), D.persisted.music, () => {
                                G.audio.playClick();
                                D.persisted.music = !D.persisted.music;
                                G.audio.syncMusicSetting();
                            }),
                            m(".hr"),
                            uiBoxToggle(t("Sound"), t("SoundDesc"), D.persisted.sound, () => {
                                D.persisted.sound = !D.persisted.sound;
                                G.audio.playClick();
                            }),
                            m(".sep10"),
                            uiBoxToggleContent(
                                m(".text-s.uppercase", t("GameSettingSFXEnableOverride")),
                                D.persisted.isSFXVolumeOverride,
                                () => {
                                    D.persisted.isSFXVolumeOverride = !D.persisted.isSFXVolumeOverride;
                                    document.getElementById("sfxVolumeSilder").disabled = D.persisted.isSFXVolumeOverride;

                                },
                                { style: "margin: -10px 0" },
                                24
                            ),
                    ]),
                    m(".box.volumesettings", [
                        m(".title", t("GameSettingVolumeControl")),
                            m(".hr"),
                            uiBoxRangeSlider(
                                t("GameSettingMusicVolume"), 
                                t("GameSettingMusicVolumeDesc"),
                                "musicVolumeSilder",
                                (D.persisted.musicVolume * 100),
                                1,
                                100,
                                1, 
                                (e) => {
                                    D.persisted.musicVolume = (e.currentTarget.value * 0.01);
                                    G.audio.syncMusicSetting();
                                }
                            ),
                            m(".hr"),
                            uiBoxRangeSlider(
                                t("GameSettingSFXVolume"), 
                                t("GameSettingSFXVolumeDesc"),
                                "sfxVolumeSilder",
                                (D.persisted.sfxVolume * 100), 
                                1,
                                100,
                                1, 
                                (e) => {
                                    D.persisted.sfxVolume = (e.currentTarget.value * 0.01);
                                }
                            ),
                    ]),
                    ifTrue(D.persisted.isSFXVolumeOverride, () => [
                        m(".box.volumeoverride", [
                            m(".title", t("GameSettingSFXVolumeOverride")),
                                m(".hr"),
                                uiBoxRangeSlider(
                                    t("GameSettingSFXBubble"), 
                                    t("GameSettingSFXBubbleDesc"),
                                    "bubbleVolumeSilder",
                                    (D.persisted.sfxBubbleVolume * 100), 
                                    0,
                                    100,
                                    1, 
                                    (e) => {
                                        D.persisted.sfxBubbleVolume = (e.currentTarget.value * 0.01);
                                    }
                                ),
                                m(".hr"),
                                uiBoxRangeSlider(
                                    t("GameSettingSFXClick"),
                                    t("GameSettingSFXClickDesc"), 
                                    "clickVolumeSilder", 
                                    (D.persisted.sfxClickVolume * 100),
                                    0,
                                    100,
                                    1, 
                                    (e) => {
                                        D.persisted.sfxClickVolume = (e.currentTarget.value * 0.01);
                                    }
                                ),
                                m(".hr"),
                                uiBoxRangeSlider(
                                    t("GameSettingSFXKaching"), 
                                    t("GameSettingSFXKachingDesc"),
                                    "kachingVolumeSilder",
                                    (D.persisted.sfxKachingVolume * 100), 
                                    0, 
                                    100,
                                    1, 
                                    (e) => {
                                        D.persisted.sfxKachingVolume = (e.currentTarget.value * 0.01);
                                    }
                                ),
                                m(".hr"),
                                uiBoxRangeSlider(
                                    t("GameSettingSFXPowerup"), 
                                    t("GameSettingSFXPowerupDesc"),
                                    "powerupVolumeSilder", 
                                    (D.persisted.sfxPowerupVolume * 100), 
                                    0, 
                                    100,
                                    1, 
                                    (e) => {
                                        D.persisted.sfxPowerupVolume = (e.currentTarget.value * 0.01);
                                    }
                                ),
                                m(".hr"),
                                uiBoxRangeSlider(
                                    t("GameSettingSFXCompleted"),
                                    t("GameSettingSFXCompletedDesc"), 
                                    "clickVolumeSilder", 
                                    (D.persisted.sfxCompletedVolume * 100),
                                    0,
                                    100,
                                    1, 
                                    (e) => {
                                        D.persisted.sfxCompletedVolume = (e.currentTarget.value * 0.01);
                                    }
                                ),
                                m(".hr"),
                                uiBoxRangeSlider(
                                    t("GameSettingSFXFreeChest"), 
                                    t("GameSettingSFXFreeChestDesc"),
                                    "freechestVolumeSilder",
                                    (D.persisted.sfxFreeChestVolume * 100), 
                                    0, 
                                    100,
                                    1, 
                                    (e) => {
                                        D.persisted.sfxFreeChestVolume = (e.currentTarget.value * 0.01);
                                    }
                                ),
                                m(".hr"),
                                uiBoxRangeSlider(
                                    t("GameSettingSFXGold"), 
                                    t("GameSettingSFXGoldDesc"),
                                    "goldVolumeSilder",
                                    (D.persisted.sfxGoldVolume * 100), 
                                    0, 
                                    100,
                                    1, 
                                    (e) => {
                                        D.persisted.sfxGoldVolume = (e.currentTarget.value * 0.01);
                                    }
                                ),
                                m(".hr"),
                                uiBoxRangeSlider(
                                    t("GameSettingSFXError"), 
                                    t("GameSettingSFXErrorDesc"),
                                    "errorVolumeSilder",
                                    (D.persisted.sfxErrorVolume * 100),
                                    0,
                                    100,
                                    1, 
                                    (e) => {
                                        D.persisted.sfxErrorVolume = (e.currentTarget.value * 0.01);
                                    }
                                ),
                                m(".hr"),
                                uiBoxRangeSlider(
                                    t("GameSettingSFXLevelup"), 
                                    t("GameSettingSFXLevelupDesc"),
                                    "LevelupVolumeSilder",
                                    (D.persisted.sfxLevelupVolume * 100), 
                                    0, 
                                    100,
                                    1, 
                                    (e) => {
                                        D.persisted.sfxLevelupVolume = (e.currentTarget.value * 0.01);
                                    }
                                ),
                        ]),
                    ]),
                ]),
            ]);
        },
    };
}