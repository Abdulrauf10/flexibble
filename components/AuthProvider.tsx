"use client"
import { useState, useEffect } from "react"
import { getProviders, signIn } from "next-auth/react"

type Provider = {
  id: string
  name: string
  type: string
  signUrl: string
  callbackUrl: string
  signinUrlParams?: Record<string, string> | null
}

type Providers = Record<string, Provider>

const AuthProvider = () => {
  const [providers, setProviders] = useState<Providers | null>(null)

  useEffect(() => {
    const fetchProvider = async () => {
      const res = await getProviders()
      setProviders(res)
    }

    fetchProvider()
  }, [])

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, idx) => (
          <button key={idx} onClick={() => signIn(provider.id)}>
            {provider.id}
          </button>
        ))}
      </div>
    )
  }
}

export default AuthProvider
