@component('mail::message')
# New Contact Request

You got a new message from the website:

- **Name:** {{ $data['name'] }}
- **Email:** {{ $data['email'] }}
- **Phone:** {{ $data['phone'] }}
- **Service Type:** {{ $data['serviceType'] ?? 'Not specified' }}

**Message:**
{{ $data['message'] }}

---

Thanks,  
Your website (ihomehandyman.com)
@endcomponent
