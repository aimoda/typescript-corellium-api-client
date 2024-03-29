/**
 * Corellium API
 * REST API to manage your virtual devices.
 *
 * OpenAPI spec version: 6.1.0-20784
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* ### Instance Boot Option * kalloc: Enable kalloc/kfree trace access via GDB (Enterprise only) * gpu: Enable cloud GPU acceleration (Extra costs incurred, cloud only) * no-keyboard: Enable keyboard passthrough from web interface * nodevmode: Disable developer mode on iOS16 and greater * sep-cons-ext: Patch SEPOS to print debug messages to console * iboot-jailbreak: Patch iBoot to disable signature checks * llb-jailbreak: Patch LLB to disable signature checks * rom-jailbreak: Patch BootROM to disable signature checks
*/
export type InstanceBootOptionsAdditionalTag = "kalloc" | "gpu" | "no-keyboard" | "nodevmode" | "sep-cons-ext" | "iboot-jailbreak" | "llb-jailbreak" | "rom-jailbreak" ;
