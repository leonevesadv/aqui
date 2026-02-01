/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: pacotesdeviagem
 * Interface for PacotesdeViagem
 */
export interface PacotesdeViagem {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType date */
  dataDeFim?: Date | string;
  /** @wixFieldType text */
  packageName?: string;
  /** @wixFieldType date */
  dataDeInicio?: Date | string;
  /** @wixFieldType text */
  destination?: string;
  /** @wixFieldType text */
  duration?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType text */
  itinerary?: string;
  /** @wixFieldType text */
  inclusions?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  mainImage?: string;
  /** @wixFieldType text */
  shortDescription?: string;
}
