"use client";
import { Select } from "@/components/CustomSelect";
import { useLanguage } from "@/context/LanguageContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const page = () => {
  const { t, language } = useLanguage();
  const form = useFormik({
    initialValues: {
      requestType: "",
      model: "",
      name: "",
      email: "",
      message: "",
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      requestType: Yup.string().required("Request type is required"),
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: async (values) => {
      toast.promise(
        fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "contacto@lasamotors.com.do",
            subject: "New Contact Form Submission",
            message: values,
          }),
        }).then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          form.resetForm();
          return res.json();
        }),
        {
          success: t("contact.successMessage"),
          error:
            "There was an error sending your message. Please try again later.",
          pending: "Sending your message...",
        },
      );
    },
  });

  useEffect(() => {
    form.resetForm();
  }, [language]);

  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-16 text-3xl w-[50%] text-center text-wrap">
        {t("contact.title")}
      </h1>
      <form className="w-full px-6 flex flex-col items-center">
        <div className="form-group">
          <label className="form-label">{t("contact.emailField")}</label>
          <Select
            placeholder={t("contact.actionPlaceholder")}
            value={form.values.requestType}
            onChange={(text) => form.setFieldValue("requestType", text)}
            options={[
              {
                label: t("contact.options.quotation"),
                value: t("contact.options.quotation"),
              },
              {
                label: t("contact.options.testDrive"),
                value: t("contact.options.testDrive"),
              },
              {
                label: t("contact.options.generalInfo"),
                value: t("contact.options.generalInfo"),
              },
            ]}
          />
          {form.errors.requestType && (
            <span className="form-error">{form.errors.requestType}</span>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">{t("contact.modelField")}</label>
          <Select
            placeholder={t("contact.modelPlaceholder")}
            value={form.values.model}
            onChange={(text) => form.setFieldValue("model", text)}
            options={[
              { label: "No aplica", value: "No aplica" },
              { label: "C10", value: "C10" },
            ]}
          />
          {form.errors.model && (
            <span className="form-error">{form.errors.model}</span>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">{t("contact.nameField")}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.values.name}
            onChange={({ target: { value: text } }) =>
              form.setFieldValue("name", text)
            }
            className="form-input"
            placeholder={t("contact.namePlaceholder")}
            autoComplete="name"
            required
          />
          {form.errors.name && (
            <span className="form-error">{form.errors.name}</span>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">{t("contact.emailField")}</label>
          <input
            type="text"
            id="email"
            name="email"
            value={form.values.email}
            onChange={({ target: { value: text } }) =>
              form.setFieldValue("email", text)
            }
            className="form-input"
            placeholder={t("contact.emailPlaceholder")}
            autoComplete="email"
            required
          />
          {form.errors.email && (
            <span className="form-error">{form.errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">{t("contact.messageField")}</label>
          <textarea
            rows={4}
            id="name"
            name="name"
            value={form.values.message}
            onChange={({ target: { value: text } }) =>
              form.setFieldValue("message", text)
            }
            className="form-input"
            placeholder={t("contact.messagePlaceholder")}
            required
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="mt-4 px-6 py-3 bg-slate-600 text-white rounded hover:bg-slate-700 transition"
            onClick={() => form.handleSubmit()}
          >
            {t("contact.submitButton")}
          </button>
        </div>
      </form>
    </section>
  );
};

export default page;
