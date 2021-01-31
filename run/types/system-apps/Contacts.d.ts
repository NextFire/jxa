
export namespace Contacts {
    // Default Application
 export interface Application {}
    // Class
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Address for the given record.
  */
 export interface Address {
   /**
    * City part of the address.
    */
   city(): any;
   /**
    * properly formatted string for this address.
    */
   formattedAddress(): any;
   /**
    * Street part of the address, multiple lines separated by carriage returns.
    */
   street(): any;
   /**
    * unique identifier for this address.
    */
   id(): any;
   /**
    * Zip or postal code of the address.
    */
   zip(): any;
   /**
    * Country part of the address.
    */
   country(): any;
   /**
    * Label.
    */
   label(): any;
   /**
    * Country code part of the address (should be a two character iso country code).
    */
   countryCode(): any;
   /**
    * State, Province, or Region part of the address.
    */
   state(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * User name for America Online (AOL) instant messaging.
  */
 export interface AIMHandle {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Container object in the database, holds a key and a value
  */
 export interface ContactInfo {
   /**
    * Label is the label associated with value like "work", "home", etc.
    */
   label(): any;
   /**
    * Value.
    */
   value(): any;
   /**
    * unique identifier for this entry, this is persistent, and stays with the record.
    */
   id(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Arbitrary date associated with this person.
  */
 export interface CustomDate {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Email address for a person.
  */
 export interface Email {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * An entry in the address book database
  */
 export interface Entry {
   /**
    * when the contact was last modified.
    */
   modificationDate(): any;
   /**
    * when the contact was created.
    */
   creationDate(): any;
   /**
    * unique and persistent identifier for this record.
    */
   id(): any;
   /**
    * Is the entry selected?
    */
   selected(): boolean;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A Group Record in the address book database
  */
 export interface Group {
   /**
    * The name of this group.
    */
   name(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * User name for ICQ instant messaging.
  */
 export interface ICQHandle {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Address for instant messaging.
  */
 export interface InstantMessage {
   /**
    * The service name of this instant message address.
    */
   serviceName(): any;
   /**
    * The service type of this instant message address.
    */
   serviceType(): any;
   /**
    * The user name of this instant message address.
    */
   userName(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * User name for Jabber instant messaging.
  */
 export interface JabberHandle {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * User name for Microsoft Network (MSN) instant messaging.
  */
 export interface MSNHandle {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * A person in the address book database.
  */
 export interface Person {
   /**
    * The Nickname of this person.
    */
   nickname(): any;
   /**
    * Organization that employs this person.
    */
   organization(): any;
   /**
    * The Maiden name of this person.
    */
   maidenName(): any;
   /**
    * The Suffix of this person.
    */
   suffix(): any;
   /**
    * Person information in vCard format, this always returns a card in version 3.0 format.
    */
   vcard(): any;
   /**
    * The home page of this person.
    */
   homePage(): any;
   /**
    * The birth date of this person.
    */
   birthDate(): any;
   /**
    * The phonetic version of the Last name of this person.
    */
   phoneticLastName(): any;
   /**
    * The title of this person.
    */
   title(): any;
   /**
    * The Phonetic version of the Middle name of this person.
    */
   phoneticMiddleName(): any;
   /**
    * Department that this person works for.
    */
   department(): any;
   /**
    * Image for person.
    */
   image(): any;
   /**
    * First/Last name of the person, uses the name display order preference setting in Address Book.
    */
   name(): any;
   /**
    * Notes for this person.
    */
   note(): any;
   /**
    * Is the current record a company or a person.
    */
   company(): boolean;
   /**
    * The Middle name of this person.
    */
   middleName(): any;
   /**
    * The phonetic version of the First name of this person.
    */
   phoneticFirstName(): any;
   /**
    * The job title of this person.
    */
   jobTitle(): any;
   /**
    * The Last name of this person.
    */
   lastName(): any;
   /**
    * The First name of this person.
    */
   firstName(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Phone number for a person.
  */
 export interface Phone {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Other names related to this person.
  */
 export interface RelatedName {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * Profile for social networks.
  */
 export interface SocialProfile {
   /**
    * The persistent unique identifier for this profile.
    */
   id(): any;
   /**
    * The service name of this social profile.
    */
   serviceName(): any;
   /**
    * The username used with this social profile.
    */
   userName(): any;
   /**
    * A service-specific identifier used with this social profile.
    */
   userIdentifier(): any;
   /**
    * The URL of this social profile.
    */
   url(): any;
 }

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * URLs for this person.
  */
 export interface Url {}

 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 /**
  * User name for Yahoo instant messaging.
  */
 export interface YahooHandle {}
    
    // CLass Extension
 /**
  * This file was automatically generated by json-schema-to-typescript.
  * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
  * and run json-schema-to-typescript to regenerate this file.
  */

 export interface Application {
   /**
    * Returns my Address Book card.
    */
   myCard(): any;
   /**
    * Does Address Book have any unsaved changes?
    */
   unsaved(): boolean;
   /**
    * Currently selected entries
    */
   selection(): any;
   /**
    * Returns the default country code for addresses.
    */
   defaultCountryCode(): any;
 }
    
    // Records

    // Function options
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MakeOptionalParameter {
      /**
       * The class of the new object.
       */
      new: any;
      /**
       * The location at which to insert the object.
       */
      at?: any;
      /**
       * The initial contents of the object.
       */
      withData?: any;
      /**
       * The initial values for properties of the object.
       */
      withProperties?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface AddOptionalParameter {
      /**
       * where to add this child to.
       */
      to: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface RemoveOptionalParameter {
      /**
       * where to remove this child from.
       */
      from: any;
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ActionTitleOptionalParameter {
      /**
       * property that that was returned from the "action property" handler.
       */
      with: any;
      /**
       * Currently selected person.
       */
      for: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface PerformActionOptionalParameter {
      /**
       * property that that was returned from the "action property" handler.
       */
      with: any;
      /**
       * Currently selected person.
       */
      for: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ShouldEnableActionOptionalParameter {
      /**
       * property that that was returned from the "action property" handler.
       */
      with: any;
      /**
       * Currently selected person.
       */
      for: any;
    }

}
export interface Contacts extends Contacts.Application {
    // Functions

     /**
      * Create a new object.

      * @param option
      * @return The new object.
      */
     make(option?: Contacts.MakeOptionalParameter): any;

     /**
      * Add a child object.
      * @param directParameter object to add.
      * @param option
      * @return undefined
      */
     add(directParameter: Contacts.Entry, option?: Contacts.AddOptionalParameter): Contacts.Person;

     /**
      * Remove a child object.
      * @param directParameter object to remove.
      * @param option
      * @return undefined
      */
     remove(directParameter: Contacts.Entry, option?: Contacts.RemoveOptionalParameter): Contacts.Person;

     /**
      * Save all Address Book changes. Also see the unsaved property for the application class.

      * @return undefined
      */
     save(): any;

     /**
      * RollOver - Which property this roll over is associated with (Properties can be one of maiden name, phone, email, url, birth date, custom date, related name, aim, icq, jabber, msn, yahoo, address.)

      * @return undefined
      */
     actionProperty(): string;

     /**
      * RollOver - Returns the title that will be placed in the menu for this roll over

      * @param option
      * @return undefined
      */
     actionTitle(option?: Contacts.ActionTitleOptionalParameter): string;

     /**
      * RollOver - Performs the action on the given person and value

      * @param option
      * @return undefined
      */
     performAction(option?: Contacts.PerformActionOptionalParameter): boolean;

     /**
      * RollOver - Determines if the rollover action should be enabled for the given person and value

      * @param option
      * @return undefined
      */
     shouldEnableAction(option?: Contacts.ShouldEnableActionOptionalParameter): boolean;
}
