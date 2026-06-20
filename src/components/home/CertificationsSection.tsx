"use client"

import { motion } from "framer-motion"
import React from "react"
import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa"
import { certificationsConfig } from "@/data/content"
import { cn } from "@/lib/utils"
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from "./animations"

function formatDate(ym: string): string {
  const [year, month] = ym.split("-")
  const date = new Date(Number(year), Number(month) - 1)
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" })
}

export default function CertificationsSection() {
  if (certificationsConfig.length === 0) return null

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeUpVariants}
      viewport={{ once: true, margin: "-100px" }}
      className="mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-white"
      >
        Certifications
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainerVariants}
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap gap-4 flex-col md:flex-row justify-center items-stretch md:w-full"
      >
        {certificationsConfig.map((cert, i) => {
          const cardClasses = cn(
            "inline-block border border-gray-300 dark:border-gray-700 rounded-xl p-5 shadow-sm",
            "bg-gray-100 dark:bg-gray-900 h-full",
            "transition-all duration-200 w-full md:w-auto",
            cert.credentialUrl &&
              "hover:border-accent-500 hover:shadow-md hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer group"
          )

          const inner = (
            <>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                {cert.credentialUrl && (
                  <FaExternalLinkAlt className="shrink-0 mt-1 w-3.5 h-3.5 text-accent-600 dark:text-accent-400 group-hover:text-accent-500 transition-colors" />
                )}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{cert.organization}</p>

              <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-500 dark:text-gray-400">
                <FaCalendarAlt className="w-3 h-3 shrink-0" />
                <span>
                  {formatDate(cert.issueDate)}
                  {cert.expirationDate && ` \u2013 ${formatDate(cert.expirationDate)}`}
                </span>
              </div>

              {cert.credentialId && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">
                  Credential ID: {cert.credentialId}
                </p>
              )}
            </>
          )

          return (
            <motion.div key={i} variants={staggerItemVariants}>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClasses}
                  aria-label={`Verify ${cert.name} credential`}
                >
                  {inner}
                </a>
              ) : (
                <div className={cardClasses}>{inner}</div>
              )}
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
