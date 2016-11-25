import {HierarchicalStringMap} from './hierarchicalStringMap';

export interface Locale {
  readonly isocode: string;

  /// Plain human description, eg. `English'
  readonly description: string;

  /// Strings can be application-level (applied to all namespaces), or namespace
  /// level, where the strings apply only to a particular piece of application UI.
  /// The application will search the appropriate namespace first and then fall
  /// back on application-level strings
  readonly strings: HierarchicalStringMap;
}