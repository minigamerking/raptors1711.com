/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:54 AM -- April 8th, 2023
 * Project: @frc1711/raptors1711.com
 */

export type RecordEntry<T extends Record<any, any>> = [keyof T, T[keyof T]];
