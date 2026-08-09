'use client';

import { useState } from "react";
import { loginUser, registerUser } from "@/actions/userActions";
import styles from "./page.module.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.currentTarget);

    try {
      let result;
      if (isLogin) {
        result = await loginUser(formData);
      } else {
        result = await registerUser(formData);
      }

      if (result?.error) {
        setError(result.error);
      }
    } catch (err) {
      console.error("Login component error:", err);
      setError("An unexpected error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Left Panel */}
      <div className={styles.leftPanel}>
        <Link href="/" className={styles.backButton}>
          <ArrowLeft size={24} />
        </Link>
        <div className={styles.leftBgImage} />
        <div className={styles.brandWrapper}>

          <div className={styles.leftPanelText}>
            <h1 className={`headline-lg ${styles.leftTitle}`}>Accelerate Your Tech Career</h1>
            <p className={`body-lg ${styles.leftSubtitle}`}>
              Join <span className={styles.highlightNumber}>12,000+</span> Indian students building their future today.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className={styles.rightPanel}>
        <main className={styles.main}>
          {/* Logo Header */}
          <div className={styles.rightHeader}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
              <div className={styles.logoArea}>
                <img
                  alt="ABTalks Logo"
                  className={styles.logoImage}
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtgplRLDVJKB8YJ7xpZDAj92D9loPELd1JbmWmO7_mw44IysIAcN4wtvGEeunQAOEpOSARFpwweERNq4ZNEr8Re4hnkPQnA2y4fdNYs1hXFoLmGeLYcuZpSBPzWVc7ZjlKMTiItdl_VuZFWauUChEhhO3kMmKr67SewRGcg7hVFLkkOMlNvZsNlYUBcu4Z8H2gi2FuZ1l5Fk3IHbPenwa1qRnsPKGsts9AUir0BOrcSEBX4F_O3Fp-U2Og"
                />
                <span className={`headline-md ${styles.logoText}`}>ABTalks</span>
              </div>
            </Link>
          </div>

          <div className={styles.heroSection}>
            <h1 className={`headline-lg ${styles.heroTitle}`}>
              {isLogin ? "Welcome Back" : "Create an Account"}
            </h1>
            <p className={`body-md ${styles.heroSubtitle}`}>
              {isLogin ? "Log in to continue your journey." : "Start accelerating your tech career."}
            </p>
          </div>

          {/* Toggle */}
          <div className={styles.toggleContainer}>
            <div 
              className={styles.toggleGlider} 
              style={{ transform: isLogin ? 'translateX(0)' : 'translateX(100%)' }}
            />
            <button
              type="button"
              className={`label-md ${isLogin ? styles.toggleBtnActive : styles.toggleBtnInactive}`}
              onClick={() => { setIsLogin(true); setError(null); }}
            >
              Login
            </button>
            <button
              type="button"
              className={`label-md ${!isLogin ? styles.toggleBtnActive : styles.toggleBtnInactive}`}
              onClick={() => { setIsLogin(false); setError(null); }}
            >
              Create Account
            </button>
          </div>

          {error && (
            <div style={{ color: 'var(--error)', textAlign: 'center', marginBottom: '1rem', fontSize: '0.875rem' }}>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputWrapper}>
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>mail</span>
              <input
                name="email"
                className={`body-md ${styles.input}`}
                id="email"
                placeholder=" "
                required
                type="email"
              />
              <label className={`body-md ${styles.inputLabel}`} htmlFor="email">Email address</label>
            </div>

            <div className={styles.inputWrapper}>
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>lock</span>
              <input
                name="password"
                className={`body-md ${styles.input}`}
                id="password"
                placeholder=" "
                required
                type="password"
              />
              <label className={`body-md ${styles.inputLabel}`} htmlFor="password">Password</label>
            </div>

            {isLogin && (
              <div className={styles.forgotPassword}>
                <a className="label-md" href="#">Forgot Password?</a>
              </div>
            )}

            <button className={`headline-sm ${styles.submitBtn}`} type="submit" disabled={loading}>
              {loading ? "Please wait..." : (isLogin ? "Login" : "Create Account")}
              {!loading && <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
