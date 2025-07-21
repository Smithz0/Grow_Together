import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabaseClient';

export default function SignUpSupabase() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google', 'github']}
          view="sign_up"
        />
      </div>
    </div>
  );
} 